/** @jsx jsx */
import { jsx, Box, Button, Heading, Flex, Input, Text, Container } from 'theme-ui';
import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import SectionHeader from 'components/section-header';

const AmortizationCalculator = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [years, setYears] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [amortizationSchedule, setAmortizationSchedule] = useState([]);
    const [calculating, setCalculating] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const interestRate = 9.5 / 100 / 12; // Monthly interest rate

    const calculatePayment = () => {
        setCalculating(true);
        setTimeout(() => {
            const loanAmountNumber = parseFloat(loanAmount);
            const yearsNumber = parseInt(years);
            const n = yearsNumber * 12;
            const monthlyRate = interestRate;
            const payment = loanAmountNumber * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);

            setMonthlyPayment(payment.toFixed(2));
            generateAmortizationSchedule(payment, loanAmountNumber, monthlyRate, n);
            setCalculating(false);
            setShowPopup(true);
        }, 2000); // 2-second delay
    };

    const generateAmortizationSchedule = (payment, principal, rate, totalPayments) => {
        let balance = principal;
        const schedule = [];

        for (let i = 1; i <= totalPayments; i++) {
            const interestPayment = balance * rate;
            const principalPayment = payment - interestPayment;
            balance -= principalPayment;

            schedule.push({
                month: i,
                principalPayment: principalPayment.toFixed(2),
                interestPayment: interestPayment.toFixed(2),
                remainingBalance: balance.toFixed(2),
            });
        }

        setAmortizationSchedule(schedule);
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text('Amortization Schedule', 14, 10);
        doc.autoTable({
            head: [['Month', 'Principal Payment (Ksh)', 'Interest Payment (Ksh)', 'Remaining Balance (Ksh)']],
            body: amortizationSchedule.map((payment) => [
                payment.month,
                parseFloat(payment.principalPayment).toLocaleString(),
                parseFloat(payment.interestPayment).toLocaleString(),
                parseFloat(payment.remainingBalance).toLocaleString(),
            ]),
        });
        doc.save('AmortizationSchedule.pdf');
    };

    return (
        <section>
            <SectionHeader
                slogan="Amortization Calculator"
                title="Know Your Monthly Repayment."
            />
            <Container sx={styles.section}>
                <Box sx={styles.container}>
                    <Box sx={styles.leftColumn}>
                        <Box sx={styles.contentBox}>
                            <Box sx={styles.contentBoxInner}>
                                <Text as="p" sx={styles.description}>
                                    Enter your loan details below to calculate your expected monthly repayment.
                                </Text>
                                <Flex sx={styles.form}>
                                    <label htmlFor="loanAmount" sx={{ variant: 'styles.srOnly' }}>
                                        Loan Amount (Ksh)
                                    </label>
                                    <NumericFormat
                                        value={loanAmount}
                                        thousandSeparator={true}
                                        onValueChange={(values) => setLoanAmount(values.floatValue)}
                                        prefix="Ksh "
                                        displayType="input"
                                        customInput={Input}
                                        placeholder="Enter Amount: Min 1,000,000 - Max 10,500,000"
                                        required
                                        min="1,000,000"
                                        max="10,500,000"
                                    />
                                    <label htmlFor="years" sx={{ variant: 'styles.srOnly' }}>
                                        Loan Term (Years)
                                    </label>
                                    <Input
                                        type="number"
                                        value={years}
                                        onChange={(e) => setYears(e.target.value)}
                                        prefix="Yrs "
                                        placeholder=" Enter Repayment period: Max 25 Years"
                                        required
                                        min="1"
                                        max="25"
                                    />
                                </Flex>
                                <Button
                                    sx={styles.submitButton}
                                    onClick={calculatePayment}
                                    disabled={calculating}
                                >
                                    {calculating ? 'Calculating...' : 'Calculate'}
                                </Button>

                                {showPopup && (
                                    <div sx={styles.popup}>
                                        <h3>Monthly Payment: Ksh {parseFloat(monthlyPayment).toLocaleString()}</h3>
                                        <Button onClick={generatePDF}>Generate Schedule in PDF</Button>
                                    </div>
                                )}
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={styles.rightColumn}>
                        <Heading as="h2" sx={styles.title}>Loan Terms</Heading>
                        <ul sx={styles.loanTerms}>
                            <li>9.5% p.a on reducing balance</li>
                            <li>Minimum loan amount: 1 M Ksh</li>
                            <li>Maximum loan amount: 10.5 M Ksh</li>
                            <li>Loan term: Up to 25 years</li>
                        </ul>
                        <Text sx={styles.note}>
                            <strong>Note:</strong> The financier's terms & policies apply during the actual loan process. This is just an approximate to give you an idea of what to expect to pay monthly.
                        </Text>
                    </Box>
                </Box>
            </Container >
        </section >
    );
};

const styles = {
    section: {
        padding: '20px',
    },
    container: {
        mt: '10px',
        display: 'flex',
        flexDirection: ['column', null, 'row'],
        gap: '20px',
    },
    leftColumn: {
        flex: [1, null, 2],
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    rightColumn: {
        flex: [1, null, 1],
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        backgroundColor: 'muted',
        padding: '20px',
        borderRadius: '8px',
    },
    contentBox: {
        backgroundColor: 'primary',
        textAlign: 'left',
        borderRadius: 10,
        py: ['60px', null, 8],
    },
    contentBoxInner: {
        width: ['100%', null, '540px', '600px'],
        mx: 'auto',
        mt: -1,
        px: [3, 5],
    },
    title: {
        fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
        color: 'primary',
        lineHeight: [1.3, null, null, 1.25],
        fontWeight: '700',
        letterSpacing: ['-.5px', null, '-1.5px'],
        mb: [2, 3],
    },
    description: {
        fontSize: ['15px', 2, null, null, null, '17px', null, 3],
        color: 'white',
        lineHeight: [1.85, null, null, 2],
        px: [0, null, 0],
    },
    form: {
        mt: [6, null, null, 7],
        mb: '3',
        backgroundColor: ['transparent', 'white'],
        borderRadius: [0, 10],
        overflow: 'hidden',
        p: [0, 1],
        flexDirection: ['column'],
        '[type="text"], [type="number"]': {
            border: 0,
            borderBottom: '1px solid lightgray',
            borderRadius: 0,
            fontFamily: 'body',
            fontSize: ['12px', null, 2],
            fontWeight: 500,
            color: 'heading',
            py: 1,
            px: [4, null, 6],
            backgroundColor: ['white', 'transparent'],
            textAlign: 'left',
            '&:focus': {
                boxShadow: '0 0 0 0px',
            },
            '::placeholder': {
                color: 'blue',
                opacity: .5,
            },
            mb: 3,
        },
    },
    submitButton: {
        color: 'text',
        backgroundColor: 'white',
    },
    popup: {
        mt: 3,
        p: 3,
        border: '1px solid lightgray',
        borderRadius: 5,
        backgroundColor: 'white',
        textAlign: 'center',
    },
    loanTermsTitle: {
        fontSize: '20px',
        color: 'primary',
    },
    loanTerms: {
        listStyleType: 'none',
        paddingLeft: '0',
        '& li': {
            marginBottom: '10px',
            '&::before': {
                content: '"✓"',
                color: 'green',
                marginRight: '10px',
            },
        },
    },
    note: {
        marginTop: '20px',
        fontSize: '14px',
        color: 'text',
    },
};

export default AmortizationCalculator;

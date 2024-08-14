/** @jsx jsx */
import { useRef, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { jsx } from 'theme-ui';
import {
  Container, Flex, Box, Button, Input, Text, Heading,
  Textarea
} from 'theme-ui';
import axios from 'axios';

export default function ContactForm() {
  const nameInputEl = useRef(null);
  const emailInputEl = useRef(null);
  const messageInputEl = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,

    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      ...status,
      submitting: true
    });

    try {
      const res = await axios.post('/api/contact', formData, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (res.status === 200) {
        setStatus({
          submitted: true, submitting: false, error: null
        });
      } else {
        setStatus({ submitted: false, submitting: false, error: 'Oops! an error occured' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ submitted: false, submitting: false, error: 'Oops! an error occured' });
    }
  };

  return (


    <Box sx={styles.contentBox}>
      <Box sx={styles.contentBoxInner}>
        <Heading as="h2" sx={styles.title}>
          Email Us
        </Heading>
        <Text as="p" sx={styles.description}>
          Feel free to reach out to us with any inquiries or feedback. We will be happy to respond
        </Text>
        <form onSubmit={handleSubmit}>
          <Flex sx={styles.form}>
            <label htmlFor="name" sx={{ variant: 'styles.srOnly' }}>
              Full Name
            </label>
            <Input
              ref={nameInputEl}
              id="name"
              name="name"
              type="text"
              placeholder="Your Name *"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="email" sx={{ variant: 'styles.srOnly' }}>
              Email Address
            </label>
            <Input
              ref={emailInputEl}
              id="email"
              name="email"
              type="email"
              placeholder="yourmail@example.com *"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="message" sx={{ variant: 'styles.srOnly' }}>
              Message
            </label>
            <Textarea
              ref={messageInputEl}
              id="message"
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />
          </Flex>
          {status.error && <div className="error">{status.error}</div>}
          {status.submitted && <div className="success">Message sent successfully!</div>}

          <Button
            sx={styles.submitButton}
            type="submit"
            disabled={status.submitting}
            className="form__btn"
            aria-label="Submit"
          >
            {status.submitting ? 'Sending...' : 'Submit'}
          </Button>
        </form>
      </Box>
    </Box>


  );
}

const styles = {
  submitButton: {
    color: 'text',
    backgroundColor: 'white',
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
    color: 'white',
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
    '[type="text"], [type="email"], textarea': {
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
    '.form__btn': {
      flexShrink: 0,
      backgroundColor: ['text', 'primary'],
      mt: [2],
      py: ['15px'],
      cursor: 'pointer',
    },
  },
};

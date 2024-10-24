import { Body, Button, Container, Head, Html, Hr, Img, Link, Preview, Section, Text } from '@react-email/components';

const image = 'https://firebasestorage.googleapis.com/v0/b/sjbtherapy-365805.appspot.com/o/email.jpg?alt=media&token=5208b883-d055-4b40-9b08-9e2e07d88bc1';
const host = process.env.NODE_ENV === 'development' ? 'http://192.168.0.220:5002' : 'https://sjbtherapy.com'; /* : 'https://www.sjtherapy.com'; */

export const SJBTherapyResetPasswordEmail = ({ name, email, link }) => (
  <Html>
    <Head />
    <Preview>SJB Therapy - Reset your password</Preview>
    <Body style={main}>
      <Container style={container}>
        <Link href={host}>
          <Img style={img} src={image} width="350" alt="SJB Therapy" />
        </Link>
        <Section>
          <Text style={text}>Hi {name},</Text>
          <Text style={text}>Someone recently requested a password change for your SJB Therapy account. If this was you, you can set a new password here:</Text>
          <Button pX={10} pY={10} style={button} href={link}>
            Reset password
          </Button>
          <Text style={text}>If you don&apos;t want to change your password or didn&apos;t request this, just ignore and delete this message.</Text>
          <Text style={text}>
            To keep your account secure, please do not forward this email to anyone.{' '}
            {/* Head over to our Support page for{' '}
              <Link style={anchor} href={`${host}/support`}>
                more security tips.
              </Link> */}
          </Text>
          <Text style={text}>Simply Just Believe!</Text>
          <Text style={text}>Simon</Text>
          <Link style={anchor} href={host}>
            @SJB Therapy
          </Link>
          <Hr style={hr} />
          <Text style={subtext}>
            This email was originally sent to {email}. Please do not click on any links you cannot verify. All links should have origin {host}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default SJBTherapyResetPasswordEmail;

const main = {
  backgroundColor: '#f6f9fc',
  padding: '10px 0',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  padding: '45px',
};

const text = {
  fontSize: '16px',
  fontFamily: "'Roboto', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '300',
  color: '#404040',
  lineHeight: '26px',
};
const subtext = {
  fontSize: '12px',
  fontFamily: "'Roboto', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '300',
  color: '#404040',
  lineHeight: '26px',
};

const img = {
  border: 'none',
};

const button = {
  backgroundColor: '#7987CB',
  borderRadius: '5px',
  color: '#fff',
  fontFamily: "'Roboto', 'Helvetica Neue', Arial",
  fontSize: '15px',
  fontWeight: '500',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  alignItems: 'center',
  width: '100%',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const anchor = {
  textDecoration: 'none',
};

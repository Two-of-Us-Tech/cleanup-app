import styled from 'styled-components';
import { Platform } from 'react-native';
import StyledScreen from '../components/StyledScreen';
import Typography from '../components/Typography';

const TextContainer = styled.ScrollView`
  margin-horizontal: 32px;
  margin-bottom: 20px;
  margintop: ${Platform.OS === 'android' ? '60px' : '0px'};
`;

const StyledText = styled(Typography)`
  line-height: 21.5px;
`;

function TermsAndConditionsScreen() {
  return (
    <StyledScreen showBackButton headerText="Terms & Conditions" variant="secondary">
      <TextContainer showsVerticalScrollIndicator={false}>
        <StyledText fontSize="extraSmall" color="opaqueDark" fontSpacing="spaced" font="primary">
          Thank you for using CleanUp, a mobile application that allows users to participate in
          cleaning up public spaces. We want to ensure that your experience with our app is safe,
          enjoyable, and efficient. Therefore, we have established the following terms and
          conditions that govern your use of CleanUp:
          {`\n\n`}1. Acceptance of Terms
          {`\n\n`}2.By downloading, installing, or using CleanUp, you agree to be bound by these
          terms and conditions. If you do not agree to these terms, you may not use our app.
          {`\n\n`}3.Eligibility
          {`\n\n`}4.You must be at least 18 years of age to use CleanUp. If you are under 18, you
          may use the app only with the supervision and consent of a parent or legal guardian.
          {`\n\n`}5.User Conduct
          {`\n\n`}6.You agree to use CleanUp in a lawful and responsible manner. You must not use
          the app to harass, defame, or infringe on the rights of others. You also agree not to use
          the app for any illegal or unauthorized purpose.
          {`\n\n`}7.User Account
          {`\n\n`}8.To access certain features of CleanUp, you will need to create a user account.
          You are responsible for creating and maintaining accurate and complete information
          associated with your account. You are also responsible for maintaining the confidentiality
          of your login credentials.
          {`\n\n`}9.Intellectual Property Rights
          {`\n\n`}10.CleanUp owns all the intellectual property rights to the app’s contents,
          features, and functionality. You may not reproduce, distribute, modify, create derivative
          works, publicly display or perform, republish, download, store, or transmit any of the
          material on our app, except as permitted by these terms and conditions.
          {`\n\n`}11.Disclaimer of Warranties; Limitation of Liability
          {`\n\n`}12.CleanUp provides the app on an “as is” and “as available” basis, without
          warranties of any kind, either express or implied. We do not warrant that the app will be
          uninterrupted or error-free. We will not be liable for any damages, including personal
          injury, loss of revenue, loss of profits, or loss of data arising out of or in connection
          with your use of Clean Beach.
          {`\n\n`}13.Indemnification
          {`\n\n`}14.You agree to defend, indemnify, and hold harmless CleanUp, its affiliates,
          licensors, and service providers, and its and their respective officers, directors,
          employees, contractors, agents, licensors, suppliers, successors, and assigns from and
          against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or
          fees (including reasonable attorneys’ fees) arising out of or in connection with your use
          of CleanUp.
          {`\n\n`}We may modify these terms and conditions at any time, without notice to you. Your
          continued use of CleanUp after any modification signifies your acceptance of the revised
          terms. If you have any questions or concerns about these terms and conditions,{`\n\n`}
          please contact us at tiago.borba@twoustech.com.
        </StyledText>
      </TextContainer>
    </StyledScreen>
  );
}

export default TermsAndConditionsScreen;

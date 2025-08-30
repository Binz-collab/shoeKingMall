import CardRegistrationModal from '../components/ModalCreditCard';

export default {
  title: 'Components/CardRegistrationModal',
  component: CardRegistrationModal,
};

const Template = (args) => <CardRegistrationModal {...args} />;

export const Default = Template.bind({});
Default.args = {};
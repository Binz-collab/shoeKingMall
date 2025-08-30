import React from 'react';
import RegisterCreditCard from '../components/RegisterCreditCard';

export default {
  title: 'Components/RegisterCreditCard',
  component: RegisterCreditCard,
  // Optional: More story args can be added here
};

const Template = (args) => <RegisterCreditCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Optional: Default props for the component can be set here
};

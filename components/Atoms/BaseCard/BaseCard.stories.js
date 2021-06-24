import BaseCard from '.'
export default {
    component: BaseCard,
    title:'Atoms/BaseCard'
};

const Template = (args) => <BaseCard {...args} />

export const Default = Template.bind({});
Default.args ={
    children: 'children'
}
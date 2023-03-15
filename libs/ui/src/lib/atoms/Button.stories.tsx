import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	component: Button,
	title: 'Button',
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		text: 'Button',
	},
};

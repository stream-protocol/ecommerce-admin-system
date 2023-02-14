import { ComponentMeta } from "@storybook/react"
import React from "react"
import Avatar from "."

export default {
  title: "Atoms/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template = args => (
  <div className="h-large w-large">
    <Avatar {...args} />
  </div>
)

export const User = Template.bind({})
User.args = {
  user: {
    first_name: "StreamPay",
    last_name: "Team",
    email: "contact@streamprotocol.org",
  },
}

export const NoUser = Template.bind({})
NoUser.args = {}

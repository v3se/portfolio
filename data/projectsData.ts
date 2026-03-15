interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Serverless RAG Application',
    description: `A serverless RAG application built on AWS that lets you ask questions about your documents and get answers with exact source citations. Built with API Gateway, Lambda, Bedrock, and S3.`,
    imgSrc: '/static/images/aws.png',
    href: 'https://github.com/v3se/aws-rag-demo',
  },
  {
    title: 'Homelab AI Assistant',
    description: `A personal AI assistant that helps you manage your homelab. Includes a Tools server
    built with FastApi which allows the LLM to connect to your Homelab services. Currently supports
    integrations to Portainer and Proxmox. Powered by OpenWebUI.`,
    imgSrc: '/static/images/proxmox.png',
    href: 'https://github.com/v3se/homelab-assistant',
  },
  {
    title: 'Discord Game Server Manager Bot',
    description: `Discord bot that allows to start EC2 instances in AWS. Used for starting game servers
    from our Discord server. It includes automation to stop the EC2 instance if no traffic is detected in 15 minutes`,
    imgSrc: '/static/images/discord.png',
    href: 'https://github.com/v3se/discord-ec2',
  },
]

export default projectsData

import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Web3Social',
        description: "Developed a social media platform for the Web3 ecosystem, enabling users to create, share, and interact with decentralized content. Integrated blockchain technology for user authentication, content ownership verification, and token-based incentives. Designed and implemented the front-end with React and TypeScript and managed the back-end logic with Firebase and smart contracts.",
        tools: ['React', 'TypeScript', 'Solidity', 'Solana SDK', 'Firebase'],
        role: 'Full Stack Web3 Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'LendFury',
        description: 'Built a DeFi lending and borrowing platform allowing users to earn interest on their crypto assets or borrow against them. Designed and implemented smart contracts to handle lending protocols, collateral management, and interest calculations. Led the backend development using Node.js and MongoDB, ensuring scalability and security.',
        tools: ['Solidity', 'Web3.js', 'Solana SDK', 'MongoDB', 'Node.js', 'React'],
        role: 'Senior Smart Contract Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'SolaraXchange',
        description: `Developed a decentralized exchange (DEX) on the Solana blockchain. SolaraXchange facilitates real-time, low-cost trading of various cryptocurrencies and NFTs. The platform integrates IPFS for decentralized storage and utilizes Solana's high-speed consensus mechanism to ensure smooth user experiences. Managed the full-cycle development process, including smart contract development, front-end integration, and security auditing.`,
        tools: [' Rust', 'Solana SDK', 'Anchor', 'React', 'TypeScript', 'IPFS'],
        code: '',
        role: 'Lead Blockchain Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'SecureGuard',
        description: "Developed a blockchain-based security protocol designed to protect decentralized applications (dApps) against cyber threats. The project uses advanced cryptographic algorithms and secure coding practices to mitigate risks such as DDoS attacks and phishing. Implemented monitoring and automated response systems using Golang and Kubernetes, deployed on AWS.",
        tools: ['Solidity', 'Solana SDK', 'Golang', 'Kubernetes', 'AWS', 'React'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Cybersecurity Engineer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
const Data = {
    Network: {
        Def: `<span class="text-indigo-500">etwork</span> is a collection of interconnected computing devices that can exchange data and share resources. 
        These devices (also called nodes or hosts) can include computers, servers, printers, routers, switches, and more. 
        The connections can be wired (e.g., Ethernet cables, fiber optic cables) or wireless (e.g., Wi-Fi, Bluetooth).`,
        type: {
            def: `omputer networks are primarily categorized by the geographical area they cover, leading to distinctions like Personal Area Networks (PANs), Local Area Networks (LANs), Metropolitan Area Networks (MANs), and Wide Area Networks (WANs). Beyond geographical scope, networks can also be classified by their architecture (such as client-server or peer-to-peer), their topology or physical layout (like star, bus, or ring), the transmission medium they use (wired or wireless), and their ownership (private or public). These criteria help define a network's functionality, scale, and management.`,
            type: {
                PAN: `A Personal Area Network is the smallest and most localized type of network. It connects an individual's personal electronic devices within their immediate vicinity, typically within a 10-meter (33-foot) range. PANs are used for direct communication and resource sharing among devices like smartphones, headphones, laptops, and wearables, often utilizing technologies such as Bluetooth or infrared.`,
                LAN: `A Local Area Network connects computers and other devices within a limited geographical area, such as a home, office building, school, or a single campus. LANs are typically privately owned and managed, providing high-speed data transfer locally. They are commonly used for sharing resources like printers, files, and internet access, and often rely on Ethernet cables or Wi-Fi.`,
                MAN: `A Metropolitan Area Network covers a larger geographical area than a LAN but is smaller than a WAN, typically spanning a city or a large campus. A MAN often connects multiple LANs within that urban or metropolitan region, providing high-speed connectivity across the area and sometimes serving as the backbone for Internet Service Providers (ISPs).`,
                WAN: `A Wide Area Network connects computers and smaller networks (like LANs and MANs) over large geographical distances, spanning cities, countries, or even continents. WANs typically rely on telecommunication lines, fiber optics, or satellite links. The Internet is the largest and most well-known example of a WAN.`,
                VPN: `A Virtual Private Network creates a secure, encrypted connection over a less secure public network, such as the internet. It allows users to send and receive data securely as if their devices were directly connected to a private network, protecting data from unauthorized access and enhancing privacy.`,
                SAN: `A Storage Area Network is a dedicated, high-speed network that provides servers with access to a consolidated, shared pool of storage devices. SANs are primarily used in enterprise environments for business-critical applications requiring high throughput and low latency, making storage appear as if it were directly attached to each server.`,
            },
            PANSM: `A network for an individual, connecting devices within a very short range (e.g., Bluetooth headphones, smartphone, tablet).`,
            PAN: `A Personal Area Network (PAN) is the smallest and most localized type of computer network, designed to connect an individual's electronic devices within their immediate vicinity, typically within a 10-meter (33-foot) range. These networks are characterized by their small scale, focusing solely on a single user's devices. They are purpose-driven, facilitating direct communication and resource sharing among personal devices like connecting a smartphone to headphones. Setting up PANs is generally simple and requires little to no complex configuration or additional networking equipment, making them incredibly **cost-effective**. Furthermore, many PAN technologies are designed for low power consumption, which helps extend the battery life of portable devices.`,
            MAN: ` Connects devices within a limited geographical area, such as a home, office building, or campus. LANs are typically owned and managed by a single organization.`,
            LAN: `Connects LANs over a large geographical area, spanning cities, countries, or even the world. The internet is the largest WAN.`,
            WAN: `Covers a larger area than a LAN but smaller than a WAN, typically a city or a large campus.`,
            VPN: ` Extends a private network over a public network (like the internet), allowing users to send and receive data securely as if their devices were directly connected to the private network.`
        },

        usage: {
            DataSharing: `Transferring files, documents, and other information between devices.`,
            ResourceSharing: `Allowing multiple devices to access shared resources like printers, scanners, or internet connections.`,
            Communication: `Enabling users to communicate through email, instant messaging, video calls, etc.`,
        },

        Topology: {
            def: `Network topology refers to the physical and logical arrangement of nodes and connections in a network. It impacts performance, scalability, and management.`
        },

        Protocols: {
            def:` set of rules and standards that govern how data is transmitted, received, and interpreted across a network. Without protocols, devices wouldn't understand each other.`,
            type: {
                TCPIP: `TCP/IP is not a single protocol, but rather a suite (or stack) of communication protocols that forms the fundamental language of the internet and most other computer networks. It's often referred to as the "Internet Protocol Suite." It's named after its two most important protocols: TCP and IP.
                TCP/IP is the backbone of the internet. IP ensures that data can be addressed and routed across the vast global network, while TCP guarantees that this data arrives reliably and completely, even if packets take different routes or encounter issues along the way. Without this foundational suite, the internet as we know it would not exist.
                `,
                HTTPHTTPS: `HTTP: An application-layer protocol for transmitting hypermedia documents, such as HTML. It's the foundation of any data exchange on the World Wide Web. HTTPS: The secure version of HTTP. It encrypts the communication between a web browser and a web server, ensuring data privacy and integrity. HTTP is what makes the web accessible and functional, allowing you to view and interact with websites. HTTPS is crucial for security and privacy, especially for sensitive information like login credentials, financial transactions, and personal data, making it the standard for almost all modern websites.`,
                DNS: `The Domain Name System is often called the "phonebook of the internet." It's a hierarchical and decentralized naming system for computers, services, or any resource connected to the Internet or a private network. Its primary function is to translate human-readable domain names (like www.example.com) into numerical IP addresses (like 192.0.2.1) that computers use to identify each other. DNS is absolutely essential for the usability of the internet. Imagine having to remember 142.250.187.164 instead of google.com every time you wanted to visit Google. DNS makes the internet user-friendly by allowing us to use memorable names. It's a critical infrastructure service, and its reliability directly impacts internet accessibility.`,
                UDP: `UDP is a simple, connectionless transport-layer protocol that runs over IP. It's an alternative to TCP within the TCP/IP suite. While less reliable than TCP, UDP's speed and low overhead are critical for applications where timeliness is more important than guaranteed delivery. If a packet is lost, it's usually better to just drop it and move on to the next one, rather than delay the entire stream by waiting for a retransmission.`
            }
        }
    }
}

Data.Network.benefits = {
    CostSavings: `Reduces hardware and software costs by allowing multiple users to share resources like printers and internet connections.`,
    Scalability: `Networks can be easily expanded to accommodate more users and devices as an organization grows, without major overhauls.`,
    EnhancedSecurity: `Centralized security measures, backups, and access controls can be implemented more effectively across a network, protecting data.`,
    CentralizedManagement: `Simplifies administration, updates, and troubleshooting of connected devices and applications from a central point, saving time.`,
    ImprovedPerformance: `Distributes workloads, enables faster data access, and facilitates real-time collaboration, leading to overall system efficiency.`
};

Data.Network.concepts = {
    Topology: {
        title: "Network Topologies",
        description: "Explore different network layouts like Star, Bus, Ring, and Mesh, and understand their advantages and disadvantages.",
        icon: "🔗" 
    },
    Protocols: {
        title: "Communication Protocols",
        description: "Learn about the rules that govern data exchange, such as TCP/IP, HTTP, FTP, and their roles in networking.",
        icon: "📜"
    },
    Devices: {
        title: "Networking Devices",
        description: "Understand the function of essential hardware like Routers, Switches, Hubs, and Modems in building networks.",
        icon: "💻"
    },
    Security: {
        title: "Network Security",
        description: "Discover concepts like Firewalls, Encryption, VPNs, and best practices to protect network data and resources.",
        icon: "🔒"
    },
    Cloud: {
        title: "Cloud Networking",
        description: "Dive into how cloud computing impacts network architecture, including virtual networks and cloud-based services.",
        icon: "☁️"
    },
    IoT: {
        title: "Internet of Things (IoT)",
        description: "Understand how everyday objects connect and communicate over networks, enabling smart homes and industrial automation.",
        icon: "💡"
    }
};

Data.Network.Othertypes = {
    CAN: {
        title: "CAN",
        description: `A Campus Area Network is a computer network that interconnects multiple Local Area Networks (LANs) within a limited geographical area, such as a university campus, corporate headquarters, or industrial park. CANs are larger than LANs but generally smaller than MANs, and the networking equipment and infrastructure are almost entirely owned by the campus tenant or owner. They facilitate high-speed communication and resource sharing across different buildings.`,
    },
    WireLessLAN: {
        title: "Wireless LAN",
        description: `A Wireless Local Area Network functions similarly to a LAN but uses wireless communication technology, primarily Wi-Fi (based on IEEE 802.11 standards), to connect devices without physical cables. WLANs offer greater mobility and flexibility within their coverage area, commonly found in homes, offices, and public hotspots.`,
    },
};


Data.Network.proto = {
    Topology: {
        title: "Network Topologies",
        description: "Explore different network layouts like Star, Bus, Ring, and Mesh, and understand their advantages and disadvantages.",
        icon: "🔗" 
    },
    Protocols: {
        title: "Communication Protocols",
        description: "Learn about the rules that govern data exchange, such as TCP/IP, HTTP, FTP, and their roles in networking.",
        icon: "📜"
    },
    Devices: {
        title: "Networking Devices",
        description: "Understand the function of essential hardware like Routers, Switches, Hubs, and Modems in building networks.",
        icon: "💻"
    },
    Security: {
        title: "Network Security",
        description: "Discover concepts like Firewalls, Encryption, VPNs, and best practices to protect network data and resources.",
        icon: "🔒"
    },
    Cloud: {
        title: "Cloud Networking",
        description: "Dive into how cloud computing impacts network architecture, including virtual networks and cloud-based services.",
        icon: "☁️"
    },
    IoT: {
        title: "Internet of Things (IoT)",
        description: "Understand how everyday objects connect and communicate over networks, enabling smart homes and industrial automation.",
        icon: "💡"
    }
};

const DataP = {
    Network: {
        Protocols: {
            Physical: {
                title: "Layer 1: Physical Layer",
                description: "Handles the physical connection and raw bit transmission over the network medium (cables, Wi-Fi, etc.).",
                icon: "🔌"            
            },
            DataLink: {
                title: "Layer 2: Data Link Layer",
                description: "Provides reliable data transfer between directly connected nodes and handles error detection/correction.",
                icon: "🌉" 
            },
            Network: {
                title: "Layer 3: Network Layer",
                description: "Manages logical addressing (IP addresses) and routing of data packets across different networks.",
                icon: "🗺️" 
            },
            Transport: {
                title: "Layer 4: Transport Layer",
                description: "Ensures end-to-end data delivery between processes, providing reliable (TCP) or fast (UDP) services.",
                icon: "🚚" 
            },
            Session: {
                title: "Layer 5: Session Layer",
                description: "Establishes, manages, and terminates communication sessions between applications.",
                icon: "🤝" 
            },
            Presentation: {
                title: "Layer 6: Presentation Layer",
                description: "Handles data formatting, encryption, decryption, and compression for the application layer.",
                icon: "🖼️" 
            },
            Application: {
                title: "Layer 7: Application Layer",
                description: "Provides network services directly to end-user applications (e.g., HTTP, FTP, SMTP).",
                icon: "💻"  
            }
        }
    }
};
import React from 'react'
import {
    Grid3x3, Database, Workflow, ArrowRight, whale, Cog, Target, Scale,
    Layers, FileSpreadsheet, Folder, Wand2, LayoutGrid, Users, UserCheck,
    Lock, UsersRound, ClipboardList, Megaphone, Diamond, GitBranch,
    Box, GitMerge, ShoppingBag, Wand, Flag, ShieldCheck
} from 'lucide-react'
import '../css/global.css'
import Layout from '@theme/Layout'; // Import Layout from Docusaurus

// UI Components
const Card = ({ className = '', children }) => (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
        {children}
    </div>
);

const CardHeader = ({ className = '', children }) => (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
        {children}
    </div>
);

const CardContent = ({ className = '', children }) => (
    <div className={`p-6 pt-0 ${className}`}>
        {children}
    </div>
);

const CardTitle = ({ className = '', children }) => (
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>
        {children}
    </h3>
);

const Button = ({ variant = "default", className = '', children }) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

    const variantStyles = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary"
    };

    return (
        <button className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
            {children}
        </button>
    );
}


const Homepage = () => {


    return (
        <main>
            <div className="w-full">

                <div className="relative w-full max-w-5xl mx-auto p-6 space-y-12 bg-gradient-to-br from-blue-50 to-pink-50 overflow-hidden">                    {/* Grid pattern */}
                    <div
                        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
                        style={{
                            backgroundImage: `
                linear-gradient(to left, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                            backgroundSize: '64px 64px',
                            maskImage: 'linear-gradient(to left, rgba(0, 0, 0, 1.0) 20%, transparent 80%)',
                            WebkitMaskImage: 'linear-gradient(to left, rgba(0, 0, 0, 1.0) 20%, transparent 80%)'
                        }}
                    ></div>

                    {/* ToolJet Documentation Section */}
                    <div className="space-y-6 relative">
                        <h1 className="text-4xl font-bold">
                            ToolJet <span className="text-blue-600">Documentation</span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Learn how to get up and running with ToolJet
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { icon: Grid3x3, title: "Applications", color: "text-green-500" },
                                { icon: Database, title: "Database", color: "text-red-500" },
                                { icon: Workflow, title: "Workflows", color: "text-purple-500" }
                            ].map((item, index) => (
                                <Card key={index} className="bg-white">
                                    <CardHeader>
                                        <item.icon className={`w-8 h-8 ${item.color}`} />
                                        <CardTitle>{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus orci, dictum ut tellus ac, facilisis congue tellus.
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Card className="bg-white">
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                                    <div className="space-y-1">
                                        <p className="text-2xl font-bold">.48</p>
                                        <p className="text-sm text-gray-500">Customers</p>
                                        <p className="text-sm text-red-500">↓20%</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-2xl font-bold">307.48</p>
                                        <p className="text-sm text-gray-500">Total Customers</p>
                                        <p className="text-sm text-green-500">↑30%</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-2xl font-bold">307.48</p>
                                        <p className="text-sm text-gray-500">Total Customers</p>
                                        <p className="text-sm text-green-500">↑30%</p>
                                    </div>
                                    <div className="w-full md:w-1/3 h-16 bg-gray-200 rounded-md"></div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-white">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    Getting Started
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500">
                                    Discover how to create and publish apps within minutes
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="w-full max-w-5xl mx-auto p-6 space-y-12 bg-white">
                    {/* Setup ToolJet Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Setup ToolJet</h2>
                        <p className="text-sm text-gray-500">
                            Check out the different methods you can use to deploy ToolJet on your machine
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { icon: Cog, title: "Try ToolJet" },
                                { icon: Cog, title: "System requirement" },
                                { icon: Target, title: "Choose your ToolJet" },
                                { icon: Scale, title: "Upgrade to LTS" }
                            ].map((item, index) => (
                                <Card key={index} className="bg-white">
                                    <CardHeader>
                                        <item.icon className="w-8 h-8 text-blue-500" />
                                        <CardTitle className="text-sm">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-xs text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus orci, dictum ut tellus ac, facilisis congue tellus.
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Deploy on Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Deploy on</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                "DigitalOcean", "Docker", "AWS EC2", "AWS ECS",
                                "Openshift", "Helm", "Kubernetes", "Kubernetes (GKE)",
                                "Kubernetes (GKE)", "Kubernetes (AKS)", "Kubernetes (AKS)", "Kubernetes (EKS)"
                            ].map((item, index) => (
                                <Card key={index} className="bg-white p-4 flex items-center justify-center">
                                    <span className="text-sm font-medium">{item}</span>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Explore more details link */}
                    <div className="text-center">
                        <Button variant="link" className="text-blue-600 hover:text-blue-800">
                            Explore more details <ArrowRight className="ml-2 w-4 h-4 inline" />
                        </Button>
                    </div>

                    {/* Bring your data to ToolJet section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Bring your data to ToolJet</h2>
                        <p className="text-sm text-gray-500">
                            Check out the different methods you can use to deploy ToolJet on your machine
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { icon: Layers, title: "Overview" },
                                { icon: FileSpreadsheet, title: "Sample data source" },
                                { icon: Folder, title: "Datasource library" },
                                { icon: Wand2, title: "Transformation" }
                            ].map((item, index) => (
                                <Card key={index} className="bg-white">
                                    <CardHeader>
                                        <item.icon className="w-8 h-8 text-green-500" />
                                        <CardTitle className="text-sm">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-xs text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus orci, dictum ut tellus ac, facilisis congue tellus.
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Manage your organization section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Manage your organization</h2>
                        <p className="text-sm text-gray-500">
                            Check out the different methods you can use to deploy ToolJet on your machine
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { icon: LayoutGrid, title: "Dashboard" },
                                { icon: Users, title: "Workspaces" },
                                { icon: UserCheck, title: "User authentication" },
                                { icon: Lock, title: "Permissions" },
                                { icon: UsersRound, title: "Users and groups" },
                                { icon: ClipboardList, title: "Audit logs" },
                                { icon: Megaphone, title: "White label" },
                                { icon: Diamond, title: "Super admin" },
                                { icon: Database, title: "Licensing" }
                            ].map((item, index) => (
                                <Card key={index} className="bg-white p-4 flex items-center space-x-2">
                                    <item.icon className="w-5 h-5 text-orange-500" />
                                    <span className="text-sm font-medium">{item.title}</span>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Manage releases section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Manage releases</h2>
                        <p className="text-sm text-gray-500">
                            Check out the different methods you can use to deploy ToolJet on your machine
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { icon: GitBranch, title: "Git Sync" },
                                { icon: Box, title: "Multi-Environment" },
                                { icon: GitMerge, title: "Versioning and release" }
                            ].map((item, index) => (
                                <Card key={index} className="bg-white">
                                    <CardHeader>
                                        <item.icon className="w-8 h-8 text-blue-500" />
                                        <CardTitle className="text-sm">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-xs text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus orci, dictum ut tellus ac, facilisis congue tellus.
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Additional resources section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Additional resources</h2>
                        <p className="text-sm text-gray-500">
                            Check out the different methods you can use to deploy ToolJet on your machine
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { icon: ShoppingBag, title: "Marketplace" },
                                { icon: Wand, title: "Copilot" },
                                { icon: Flag, title: "Tracking" },
                                { icon: ShieldCheck, title: "Security" }
                            ].map((item, index) => (
                                <Card key={index} className="bg-white">
                                    <CardHeader>
                                        <item.icon className="w-8 h-8 text-green-500" />
                                        <CardTitle className="text-sm">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-xs text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus orci, dictum ut tellus ac, facilisis congue tellus.
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Homepage;
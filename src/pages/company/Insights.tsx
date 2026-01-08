import { useEffect, useState } from 'react';
import {
    Leaf, Zap, TrendingUp, TrendingDown, Activity,
    ChevronDown, BarChart3, Globe2,
    Sun, Wind, Droplets, Flame, TreePine, Factory,
    Info, Calendar, ArrowUpRight
} from 'lucide-react';

// Types
interface Subsector {
    name: string;
    issued: number;
    retired: number | null;
}

interface Sector {
    name: string;
    subsectors: Subsector[];
}

interface Registry {
    id: string;
    name: string;
    symbol: string;
    issued: number;
    retired: number | null;
    unit: string;
    sectors: Sector[];
}

interface Summary {
    totalIssued: number;
    totalRetired: number;
    unit: string;
}

interface CategoryData {
    summary: Summary;
    registries: Registry[];
}

interface MarketTrend {
    name: string;
    growth: number;
    unit: string;
}

interface RegionData {
    region: string;
    share: number;
    unit: string;
}

interface InsightsData {
    lastUpdated: string;
    description: string;
    carbonCredits: CategoryData;
    renewableEnergyCertificates: CategoryData;
    marketTrends: {
        topGrowingSectors: MarketTrend[];
        regionBreakdown: RegionData[];
    };
}

// Utility functions
const formatNumber = (num: number | null, decimals: number = 1): string => {
    if (num === null) return 'N/A';
    if (num >= 1e9) return (num / 1e9).toFixed(decimals) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(decimals) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(decimals) + 'K';
    return num.toFixed(decimals);
};

// Get icon for subsector
const getSubsectorIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('solar')) return <Sun className="w-4 h-4" />;
    if (lowerName.includes('wind')) return <Wind className="w-4 h-4" />;
    if (lowerName.includes('hydro')) return <Droplets className="w-4 h-4" />;
    if (lowerName.includes('biomass') || lowerName.includes('biochar')) return <Flame className="w-4 h-4" />;
    if (lowerName.includes('forest') || lowerName.includes('redd') || lowerName.includes('tree')) return <TreePine className="w-4 h-4" />;
    if (lowerName.includes('industrial') || lowerName.includes('factory')) return <Factory className="w-4 h-4" />;
    return <Activity className="w-4 h-4" />;
};

// Registry Card Component
function RegistryCard({
    registry,
    isCarbon
}: {
    registry: Registry;
    isCarbon: boolean;
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`bg-slate-900/60 backdrop-blur-sm border ${isCarbon ? 'border-emerald-500/20 hover:border-emerald-500/40' : 'border-cyan-500/20 hover:border-cyan-500/40'} rounded-2xl overflow-hidden transition-all duration-300`}>
            {/* Header */}
            <div
                className="p-5 cursor-pointer hover:bg-slate-800/30 transition-colors"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${isCarbon ? 'bg-gradient-to-br from-emerald-400 to-emerald-600' : 'bg-gradient-to-br from-cyan-400 to-cyan-600'} flex items-center justify-center shadow-lg`}>
                            <span className="text-slate-950 font-bold text-sm">{registry.symbol}</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-slate-100">{registry.name}</h3>
                            <p className="text-xs text-slate-400">{registry.sectors.length} sector{registry.sectors.length !== 1 ? 's' : ''} tracked</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="text-right hidden sm:block">
                            <p className="text-xs text-slate-400 uppercase tracking-wider">Issued</p>
                            <p className={`text-lg font-bold ${isCarbon ? 'text-emerald-400' : 'text-cyan-400'}`}>
                                {formatNumber(registry.issued)}
                            </p>
                        </div>
                        <div className="text-right hidden sm:block">
                            <p className="text-xs text-slate-400 uppercase tracking-wider">Retired</p>
                            <p className="text-lg font-semibold text-slate-300">
                                {formatNumber(registry.retired)}
                            </p>
                        </div>
                        <div className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                            <ChevronDown className={`w-5 h-5 ${isCarbon ? 'text-emerald-400' : 'text-cyan-400'}`} />
                        </div>
                    </div>
                </div>

                {/* Mobile stats */}
                <div className="flex gap-4 mt-4 sm:hidden">
                    <div className="flex-1 bg-slate-800/50 rounded-lg p-3">
                        <p className="text-xs text-slate-400">Issued</p>
                        <p className={`text-lg font-bold ${isCarbon ? 'text-emerald-400' : 'text-cyan-400'}`}>
                            {formatNumber(registry.issued)}
                        </p>
                    </div>
                    <div className="flex-1 bg-slate-800/50 rounded-lg p-3">
                        <p className="text-xs text-slate-400">Retired</p>
                        <p className="text-lg font-semibold text-slate-300">
                            {formatNumber(registry.retired)}
                        </p>
                    </div>
                </div>
            </div>

            {/* Expanded Content */}
            {isExpanded && (
                <div className="border-t border-slate-700/50 p-5 space-y-4 animate-fadeIn">
                    {registry.sectors.map((sector, sectorIdx) => (
                        <div key={sectorIdx} className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${isCarbon ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
                                <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
                                    {sector.name}
                                </h4>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pl-4">
                                {sector.subsectors.map((subsector, subIdx) => {
                                    const retirementRate = subsector.retired && subsector.issued
                                        ? ((subsector.retired / subsector.issued) * 100).toFixed(1)
                                        : null;

                                    return (
                                        <div
                                            key={subIdx}
                                            className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-200 group"
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className={`p-2 rounded-lg ${isCarbon ? 'bg-emerald-500/10 text-emerald-400' : 'bg-cyan-500/10 text-cyan-400'} group-hover:scale-110 transition-transform`}>
                                                    {getSubsectorIcon(subsector.name)}
                                                </div>
                                                <span className="text-sm font-medium text-slate-200">
                                                    {subsector.name}
                                                </span>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs text-slate-400">Issued</span>
                                                    <span className={`text-sm font-semibold ${isCarbon ? 'text-emerald-300' : 'text-cyan-300'}`}>
                                                        {formatNumber(subsector.issued)}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs text-slate-400">Retired</span>
                                                    <span className="text-sm font-semibold text-slate-300">
                                                        {formatNumber(subsector.retired)}
                                                    </span>
                                                </div>
                                                {retirementRate && (
                                                    <div className="pt-2 border-t border-slate-700/50">
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-xs text-slate-500">Retirement Rate</span>
                                                            <span className="text-xs font-medium text-amber-400">
                                                                {retirementRate}%
                                                            </span>
                                                        </div>
                                                        <div className="mt-1 h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                                                            <div
                                                                className={`h-full rounded-full ${isCarbon ? 'bg-emerald-500' : 'bg-cyan-500'}`}
                                                                style={{ width: `${Math.min(parseFloat(retirementRate), 100)}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    {/* Registry footer info */}
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-700/30 text-xs text-slate-500">
                        <Info className="w-3.5 h-3.5" />
                        <span>All values are cumulative totals • Unit: {registry.unit}</span>
                    </div>
                </div>
            )}
        </div>
    );
}

// Summary Stats Component
function SummaryStats({ carbonData, recData }: { carbonData: CategoryData; recData: CategoryData }) {
    const stats = [
        {
            label: 'Total Carbon Credits Issued',
            value: carbonData.summary.totalIssued,
            unit: carbonData.summary.unit,
            icon: <Leaf className="w-5 h-5" />,
            isCarbon: true
        },
        {
            label: 'Total Carbon Credits Retired',
            value: carbonData.summary.totalRetired,
            unit: carbonData.summary.unit,
            icon: <TrendingDown className="w-5 h-5" />,
            isCarbon: true
        },
        {
            label: 'Total RECs Issued',
            value: recData.summary.totalIssued,
            unit: recData.summary.unit,
            icon: <Zap className="w-5 h-5" />,
            isCarbon: false
        },
        {
            label: 'Total RECs Retired',
            value: recData.summary.totalRetired,
            unit: recData.summary.unit,
            icon: <TrendingDown className="w-5 h-5" />,
            isCarbon: false
        }
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
                <div
                    key={idx}
                    className={`relative overflow-hidden bg-slate-900/60 backdrop-blur-sm border ${stat.isCarbon ? 'border-emerald-500/20 hover:border-emerald-500/40' : 'border-cyan-500/20 hover:border-cyan-500/40'} rounded-2xl p-5 transition-all duration-300 group`}
                >
                    <div className={`absolute top-0 right-0 w-24 h-24 ${stat.isCarbon ? 'bg-emerald-500/5 group-hover:bg-emerald-500/10' : 'bg-cyan-500/5 group-hover:bg-cyan-500/10'} rounded-full blur-2xl transition-all`} />

                    <div className={`inline-flex p-2 rounded-xl ${stat.isCarbon ? 'bg-emerald-500/10 text-emerald-400' : 'bg-cyan-500/10 text-cyan-400'} mb-3`}>
                        {stat.icon}
                    </div>

                    <p className="text-xs text-slate-400 mb-1">{stat.label}</p>
                    <p className={`text-2xl md:text-3xl font-bold ${stat.isCarbon ? 'text-emerald-400' : 'text-cyan-400'}`}>
                        {formatNumber(stat.value)}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{stat.unit}</p>
                </div>
            ))}
        </div>
    );
}

// Market Trends Component
function MarketTrends({ trends, regions }: { trends: MarketTrend[]; regions: RegionData[] }) {
    const regionColors = ['text-amber-400', 'text-orange-400', 'text-yellow-400', 'text-lime-400'];
    const regionBgColors = ['from-amber-500 to-amber-400', 'from-orange-500 to-orange-400', 'from-yellow-500 to-yellow-400', 'from-lime-500 to-lime-400'];

    return (
        <div className="grid md:grid-cols-2 gap-6">
            {/* Top Growing Sectors */}
            <div className="bg-slate-900/60 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-xl bg-purple-500/10">
                        <TrendingUp className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100">Top Growing Sectors</h3>
                </div>

                <div className="space-y-4">
                    {trends.map((trend, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-400">
                                {idx + 1}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium text-slate-200">{trend.name}</span>
                                    <span className="text-sm font-bold text-green-400 flex items-center gap-1">
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                        {trend.growth}%
                                    </span>
                                </div>
                                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
                                        style={{ width: `${Math.min(trend.growth * 2.5, 100)}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Regional Breakdown */}
            <div className="bg-slate-900/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-xl bg-amber-500/10">
                        <Globe2 className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100">Regional Distribution</h3>
                </div>

                <div className="space-y-4">
                    {regions.map((region, idx) => (
                        <div key={idx} className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-slate-200">{region.region}</span>
                                <span className={`text-sm font-bold ${regionColors[idx % regionColors.length]}`}>{region.share}%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-gradient-to-r ${regionBgColors[idx % regionBgColors.length]} rounded-full transition-all duration-500`}
                                    style={{ width: `${region.share}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Tab Component
function TabButton({
    active,
    onClick,
    icon,
    label,
    isCarbon
}: {
    active: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    label: string;
    isCarbon: boolean;
}) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${active
                    ? isCarbon
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-800 hover:text-slate-300'
                }`}
        >
            {icon}
            <span className="hidden sm:inline">{label}</span>
        </button>
    );
}

// Main Component
export default function Insights() {
    const [data, setData] = useState<InsightsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'carbon' | 'rec'>('carbon');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/Data/insightsData.json')
            .then(res => {
                if (!res.ok) throw new Error('Failed to load data');
                return res.json();
            })
            .then((insightsData: InsightsData) => {
                setData(insightsData);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to load insights data:', err);
                setError('Failed to load insights data');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
                    <p className="text-slate-400">Loading insights data...</p>
                </div>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-400 mb-2">Error loading data</p>
                    <p className="text-slate-500 text-sm">{error}</p>
                </div>
            </div>
        );
    }

    const activeRegistries = activeTab === 'carbon'
        ? data.carbonCredits.registries
        : data.renewableEnergyCertificates.registries;

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute top-40 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/50 mb-6">
                            <BarChart3 className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                                Market Insights
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 mb-4">
                            Registry Insights
                        </h1>

                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Deep-dive analytics into carbon credits and renewable energy certificates
                            across major global registries.
                        </p>

                        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-500">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Last updated: {new Date(data.lastUpdated).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative pb-20">
                <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
                    {/* Summary Stats */}
                    <SummaryStats
                        carbonData={data.carbonCredits}
                        recData={data.renewableEnergyCertificates}
                    />

                    {/* Market Trends */}
                    <MarketTrends
                        trends={data.marketTrends.topGrowingSectors}
                        regions={data.marketTrends.regionBreakdown}
                    />

                    {/* Registry Tabs */}
                    <div className="flex items-center gap-3">
                        <TabButton
                            active={activeTab === 'carbon'}
                            onClick={() => setActiveTab('carbon')}
                            icon={<Leaf className="w-4 h-4" />}
                            label="Carbon Credits"
                            isCarbon={true}
                        />
                        <TabButton
                            active={activeTab === 'rec'}
                            onClick={() => setActiveTab('rec')}
                            icon={<Zap className="w-4 h-4" />}
                            label="RECs"
                            isCarbon={false}
                        />
                    </div>

                    {/* Registry Cards */}
                    <div className="space-y-4">
                        {activeRegistries.map((registry) => (
                            <RegistryCard
                                key={registry.id}
                                registry={registry}
                                isCarbon={activeTab === 'carbon'}
                            />
                        ))}
                    </div>

                    {/* Data Notice */}
                    <div className="bg-slate-900/40 border border-slate-700/30 rounded-xl p-4 flex items-start gap-3">
                        <Info className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-slate-400">
                            <p className="font-medium text-slate-300 mb-1">About this data</p>
                            <p>
                                Data is aggregated from official registry sources and updated periodically.
                                Sector breakdowns represent estimated distributions based on available project data.
                                For the most current figures, please refer to individual registry portals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom styles for animations */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}

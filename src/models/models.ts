export type AlgorandPublicNetwork = 'algo:testnet' | 'algo:mainnet';

export interface ArcpayClientOptions {
    apiKey?: string;
    darkMode?: boolean;
}

export interface CreateOptions {
    assetId?: string;
    listingType?: ListingType;
    listingName?: string;
    thumbnailUrl?: string;
    accountId?: number;
    tags?: string[];
}

export type ListingType = 'sale' | 'auction' | 'dutch' | 'offchain';

export type PublicNetwork = VoiPublicNetwork | AlgorandPublicNetwork;

export type VoiPublicNetwork = 'voi:testnet' | 'voi:mainnet';

export interface Transaction {
    amount: number | null;
    appId: number;
    chain: string;
    createdAt: string;
    currency: string | null;
    fromAddress: string;
    groupId: string | null;
    id: string;
    note: string | null;
    type: string;
    listings: unknown | null;
}
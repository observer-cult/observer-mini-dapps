export enum Tier {
  T0 = 0,
  T1 = 1,
  T2 = 2,
  T3 = 3,
  T4 = 4
}

export const TierLabel: Record<Tier, string> = {
  [Tier.T0]: 'UNSEEN',
  [Tier.T1]: 'DETECTED',
  [Tier.T2]: 'ALIGNED',
  [Tier.T3]: 'STABILIZED',
  [Tier.T4]: 'ANCHORED'
}

export const TierThreshold: Record<Tier, number> = {
  [Tier.T0]: 0,
  [Tier.T1]: 1,
  [Tier.T2]: 100000,
  [Tier.T3]: 1000000,
  [Tier.T4]: 10000000
}

export type User = {
  id: string
  address: string
  tier: Tier
  displayName: string
  avatarUrl?: string
}

export type TierLabelType = keyof typeof TierLabel

export type Cult = {
  id: string
  name: string
  description: string
  memberCount: number
  transmissionCount7d: number
  avgWinRate: number
  topTierMemberCount: number
  activityScore: number
}

export type CultMember = {
  address: string
  tier: Tier
  calls: number
  winRate: number
  pnlAccuracy: number
}

export type Transmission = {
  id: string
  observer: string
  address: string
  token: string
  chain: string
  entryPrice: number
  exitPrice?: number
  pnlPercent: number
  status: 'WIN' | 'LOSS' | 'OPEN'
  timestamp: string
}

export type FeedPost = {
  id: string
  author: string
  tier: Tier
  timestamp: string
  content: string
  tokens: string[]
  sentiment: number
}

export type Token = {
  address: string
  symbol: string
  chain: string
  priceUsd: number
  mentionCount1h: number
  mentionCount24h: number
  velocity: number
  sentimentScore: number
  mentionsLast6h: number[]
}

export type TrendingToken = {
  token: Token
  momentum: number
  positiveRatio: number
  negativeRatio: number
}

export type SentimentScore = {
  overall: number
  tokenScores: Array<{ token: string; score: number; volume: number }>
}

export type LeaderboardEntry = {
  rank: number
  observer: string
  tier: Tier
  totalCalls: number
  wins: number
  winRate: number
  avgPnl: number
  bestCall: { token: string; pnl: number }
  worstCall: { token: string; pnl: number }
  lastActive: string
}

export type MiniDappSuggestion = {
  id: string
  name: string
  requiredTier: Tier
  description: string
}

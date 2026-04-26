import type {
  Cult,
  LeaderboardEntry,
  MiniDappSuggestion,
  SentimentScore,
  Tier,
  Token,
  Transmission,
  User
} from '@observer-mini-dapps/types'

export class ApiError extends Error {
  public status: number
  public data: unknown

  constructor(message: string, status: number, data?: unknown) {
    super(message)
    this.status = status
    this.data = data
  }
}

const apiFetch = async <T>(path: string): Promise<T> => {
  const res = await fetch(path, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const payload = await res.json().catch(() => null)

  if (!res.ok) {
    throw new ApiError(payload?.message || 'API request failed', res.status, payload)
  }

  return payload as T
}

export const getUser = async (): Promise<User> => apiFetch<User>('/api/user')
export const getTier = async (): Promise<{ tier: Tier; balance: string }> => apiFetch<{ tier: Tier; balance: string }>('/api/tier')
export const getCults = async (): Promise<Cult[]> => apiFetch<Cult[]>('/api/cults')
export const getTransmissions = async (): Promise<Transmission[]> => apiFetch<Transmission[]>('/api/transmissions')
export const getLeaderboard = async (): Promise<LeaderboardEntry[]> => apiFetch<LeaderboardEntry[]>('/api/leaderboard')
export const getTrends = async (): Promise<Token[]> => apiFetch<Token[]>('/api/analytics/trends')
export const getTokenPrice = async (address: string): Promise<{ priceUsd: number }> => apiFetch<{ priceUsd: number }>(`/api/tokens/price/${address}`)
export const getSentiment = async (): Promise<SentimentScore> => apiFetch<SentimentScore>('/api/analytics/sentiment')
export const getMiniDappSuggestions = async (): Promise<MiniDappSuggestion[]> => apiFetch<MiniDappSuggestion[]>('/api/minidapps')

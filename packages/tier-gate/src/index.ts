import { useMemo } from 'react'
import { useAccount, useBalance } from 'wagmi'
import type { Tier } from '@observer-mini-dapps/types'

const OBS_TOKEN_ADDRESS = '0x0000000000000000000000000000000000000000'

export const tierFromBalance = (balance: bigint): Tier => {
  if (balance >= 10_000_000n * 10n ** 18n) return Tier.T4
  if (balance >= 1_000_000n * 10n ** 18n) return Tier.T3
  if (balance >= 100_000n * 10n ** 18n) return Tier.T2
  if (balance >= 1n * 10n ** 18n) return Tier.T1
  return Tier.T0
}

export const useTier = () => {
  const { address } = useAccount()
  const { data, isLoading, isError } = useBalance({
    address,
    token: OBS_TOKEN_ADDRESS
  })

  const balance = data?.value ?? 0n
  const tier = useMemo(() => tierFromBalance(balance), [balance])
  const label = useMemo(() => {
    switch (tier) {
      case Tier.T4:
        return 'ANCHORED'
      case Tier.T3:
        return 'STABILIZED'
      case Tier.T2:
        return 'ALIGNED'
      case Tier.T1:
        return 'DETECTED'
      default:
        return 'UNSEEN'
    }
  }, [tier])

  return {
    tier,
    label,
    balance,
    isLoading,
    isError
  }
}

export const useIsUnlocked = (requiredTier: Tier, currentTier: Tier): boolean => {
  return currentTier >= requiredTier
}

export const withTierGate = <P extends object>(
  Component: React.ComponentType<P>,
  requiredTier: Tier
) => {
  return (props: P & { currentTier?: Tier }) => {
    const currentTier = props.currentTier ?? Tier.T0
    if (currentTier < requiredTier) {
      return null
    }
    return <Component {...props} />
  }
}

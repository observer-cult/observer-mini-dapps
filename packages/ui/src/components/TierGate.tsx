import type { ReactNode } from 'react'
import type { Tier } from '@observer-mini-dapps/types'
import { LockedState } from './LockedState'

interface TierGateProps {
  requiredTier: Tier
  currentTier?: Tier
  children: ReactNode
}

export const TierGate = ({ requiredTier, currentTier = 0, children }: TierGateProps) => {
  if (currentTier >= requiredTier) {
    return <>{children}</>
  }

  return (
    <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
      <LockedState requiredTier={requiredTier} />
    </div>
  )
}

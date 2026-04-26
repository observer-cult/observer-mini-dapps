import type { Tier } from '@observer-mini-dapps/types'

const tierStyles: Record<Tier, string> = {
  0: 'bg-slate-600 text-white',
  1: 'bg-blue-500 text-white',
  2: 'bg-teal-400 text-slate-950',
  3: 'bg-purple-500 text-white',
  4: 'bg-gold-400 text-slate-950'
}

export const TierBadge = ({ tier }: { tier: Tier }) => {
  const labels = ['T0', 'T1', 'T2', 'T3', 'T4']
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${tierStyles[tier]}`}>
      {labels[tier]}
    </span>
  )
}

import type { Tier } from '@observer-mini-dapps/types'

export const LockedState = ({ requiredTier }: { requiredTier: Tier }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-3xl text-teal">
        🔒
      </div>
      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Locked</p>
      <h2 className="mt-4 text-2xl font-semibold text-white">Requires T{requiredTier}</h2>
      <p className="mt-2 text-slate-400">Ascend to unlock premium insights and real-time analytics.</p>
      <button className="mt-6 inline-flex rounded-full bg-teal px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal/90">
        Upgrade Tier
      </button>
    </div>
  )
}

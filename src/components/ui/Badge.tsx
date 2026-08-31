type BadgeProps = {
  children: string
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="font-mono text-xs text-muted">{children}</span>
  )
}

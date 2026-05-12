'use client'

interface CalendlyEmbedProps {
  className?: string
  height?: number
}

export default function CalendlyEmbed({ className = '', height = 650 }: CalendlyEmbedProps) {
  return (
    <div className={className} style={{ minHeight: `${height}px` }}>
      <iframe
        src="https://calendly.com/accountant-brhd/30min?hide_event_type_details=1&hide_gdpr_banner=1"
        width="100%"
        height={height}
        frameBorder="0"
        style={{ borderRadius: '8px', display: 'block' }}
        title="Book a free CPA consultation with Vishal Devgun, CPA Ontario"
        loading="lazy"
      />
    </div>
  )
}

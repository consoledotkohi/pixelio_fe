import Button from '@/components/common/Button'

export default function SamplePage() {
  return (
    <div>
      <div>
        <h2>button</h2>
        <Button variant="primary" size="lg">
          Play
        </Button>
        <Button variant="secondary">Play</Button>
        <Button variant="outline">Play</Button>
        <Button variant="light">Play</Button>
        <Button className="bg-[#4CAF50] text-white hover:bg-[#EF4444]" size="sm" rounded>
          Play
        </Button>
      </div>
    </div>
  )
}

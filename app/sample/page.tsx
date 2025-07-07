import Button from '@/components/common/Button'
import Badge from '@/components/common/Badge'

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
      <div>
        <Badge variant="pending">검토중</Badge>
        <Badge variant="approved">승인</Badge>
        <Badge variant="rejected">거절</Badge>
        <Badge variant="waiting">대기중</Badge>
        <Badge variant="transparent" size="sm">
          액션
        </Badge>
      </div>
    </div>
  )
}

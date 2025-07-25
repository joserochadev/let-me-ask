import { useRoomQuestions } from '@/http/use-room-questios'
import { QuestionItem } from './question-item'

interface QustionListProps {
  roomId: string
}

export function QuestionList(props: QustionListProps) {
  const { data } = useRoomQuestions(props.roomId)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-foreground">
          Perguntas & Respostas
        </h2>
      </div>

      {data?.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </div>
  )
}

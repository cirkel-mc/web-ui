
import { Button } from "@/lib/lite/atoms/Button"

interface ActionProps {
  onCancel: () => void
  onSubmit: () => void
}

function Action({ onCancel, onSubmit }: ActionProps) {
  return (
    <div className="flex gap-2 mt-5">
      <Button
        variant="primary"
        size="md"
        round="md"
        className="w-1/2 bg-neutral-10 border-[1px] border-[#e4e4e7] rounded-xl px-5 py-2"
        onClick={onCancel}
      >
        Cancel
      </Button>

      <Button
        variant="primary"
        size="md"
        round="md"
        className="w-1/2 bg-neutral-10 border-[1px] border-[#e4e4e7] rounded-xl bg-blue-600 text-white px-5 py-2"
        onClick={onSubmit}
      >
        Apply
      </Button>
    </div>
  )
}

export default Action

import { useTabs } from '@/lib/@hooks/useTabs'
import TabItem from './TabItem'
import type { TabItemType } from './types'

interface TabsProps {
  data: TabItemType[]
}

export const Tabs = ({ data }: TabsProps) => {
  const { isActive, activeIndex, setActiveIndex } = useTabs()

  return (
    <>
      <div className="flex flex-auto w-full">
        {data.map((item, index) => (
          <TabItem key={index} label={item.label} isActive={isActive(index)} component={item.component} onClick={() => setActiveIndex(index)} />
        ))}
      </div>
      {data[activeIndex].component}
    </>
  )
}

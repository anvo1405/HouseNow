import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const tabList = ['All', 'Pending', 'Completed']
  const [selectedTab, setSelectedTab] = useState('All')

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root defaultValue="All">
          <Tabs.List className="mt-7">
            {tabList.map((tab) => (
              <Tabs.Trigger
                key={tab}
                className={`mr-2 cursor-pointer rounded-full px-5 py-2 
                ${
                  tab === selectedTab
                    ? 'border-none bg-[#334155] text-white'
                    : 'border border-[#E2E8F0]'
                }`}
                onClick={() => setSelectedTab(tab)}
                value={tab}
              >
                {tab}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {tabList.map((tab) => (
            <Tabs.TabsContent key={tab} className="pt-10" value={tab}>
              <TodoList selectedTab={tab} />
            </Tabs.TabsContent>
          ))}
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index

'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
// import { Plus, Trash2, GripVertical, Eye } from "lucide-react"
import { Plus, Trash2, GripVertical} from "lucide-react"

type Section = {
  id: string;
  title: string;
  lessons: {
    id: string;
    title: string;
    type: 'video' | 'text' | 'audio';
    duration?: string;
  }[];
};

// export default function CurriculumEditPage({ params }: { params: { courseId: string } }) {
export default function CurriculumEditPage() {
  const [sections, setSections] = useState<Section[]>([
    {
      id: '1',
      title: 'セクション1: はじめに',
      lessons: [
        { id: '1', title: 'コースの概要', type: 'video', duration: '5:00' },
        { id: '2', title: '学習進め方', type: 'text' },
      ],
    },
    {
      id: '2',
      title: 'セクション2: 基礎',
      lessons: [
        { id: '3', title: '基本的な音階', type: 'video', duration: '10:00' },
        { id: '4', title: 'コード進行の基礎', type: 'audio', duration: '15:00' },
      ],
    },
  ])

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    if (type === 'section') {
      const newSections = Array.from(sections)
      const [reorderedSection] = newSections.splice(source.index, 1)
      newSections.splice(destination.index, 0, reorderedSection)
      setSections(newSections)
    } else if (type === 'lesson') {
      const sourceSection = sections.find(section => section.id === source.droppableId)
      const destSection = sections.find(section => section.id === destination.droppableId)

      if (sourceSection && destSection) {
        const newSourceLessons = Array.from(sourceSection.lessons)
        const [reorderedLesson] = newSourceLessons.splice(source.index, 1)

        if (source.droppableId === destination.droppableId) {
          newSourceLessons.splice(destination.index, 0, reorderedLesson)
          const newSections = sections.map(section =>
            section.id === sourceSection.id ? { ...section, lessons: newSourceLessons } : section
          )
          setSections(newSections)
        } else {
          const newDestLessons = Array.from(destSection.lessons)
          newDestLessons.splice(destination.index, 0, reorderedLesson)
          const newSections = sections.map(section => {
            if (section.id === sourceSection.id) {
              return { ...section, lessons: newSourceLessons }
            }
            if (section.id === destSection.id) {
              return { ...section, lessons: newDestLessons }
            }
            return section
          })
          setSections(newSections)
        }
      }
    }
  }

  const addSection = () => {
    const newSection: Section = {
      id: `${sections.length + 1}`,
      title: `新しいセクション`,
      lessons: [],
    }
    setSections([...sections, newSection])
  }

  const addLesson = (sectionId: string) => {
    const newLesson = {
      id: `lesson-${Date.now()}`,
      title: '新しいレッスン',
      type: 'video' as const,
    }
    const newSections = sections.map(section =>
      section.id === sectionId
        ? { ...section, lessons: [...section.lessons, newLesson] }
        : section
    )
    setSections(newSections)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">カリキュラムの編集</h1>
        <Tabs value={activeTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="edit" onClick={() => setActiveTab('edit')}>編集</TabsTrigger>
            <TabsTrigger value="preview" onClick={() => setActiveTab('preview')}>プレビュー</TabsTrigger>
          </TabsList>
          <TabsContent value="edit">
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="sections" type="section">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {sections.map((section, index) => (
                      <Draggable key={section.id} draggableId={section.id} index={index}>
                        {(provided) => (
                          <Card className="mb-4" ref={provided.innerRef} {...provided.draggableProps}>
                            <CardHeader>
                              <div className="flex items-center">
                                <div {...provided.dragHandleProps}>
                                  <GripVertical className="mr-2" />
                                </div>
                                <CardTitle>{section.title}</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <Droppable droppableId={section.id} type="lesson">
                                {(provided) => (
                                  <div {...provided.droppableProps}

 ref={provided.innerRef}>
                                    {section.lessons.map((lesson, index) => (
                                      <Draggable key={lesson.id} draggableId={lesson.id} index={index}>
                                        {(provided) => (
                                          <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded"
                                          >
                                            <div className="flex items-center">
                                              <GripVertical className="mr-2" />
                                              <span>{lesson.title}</span>
                                            </div>
                                            <div className="flex items-center">
                                              {lesson.type === 'video' && <span className="mr-2">🎥</span>}
                                              {lesson.type === 'text' && <span className="mr-2">📝</span>}
                                              {lesson.type === 'audio' && <span className="mr-2">🎧</span>}
                                              {lesson.duration && <span className="mr-2">{lesson.duration}</span>}
                                              <Button variant="ghost" size="sm">
                                                <Trash2 className="h-4 w-4" />
                                              </Button>
                                            </div>
                                          </div>
                                        )}
                                      </Draggable>
                                    ))}
                                    {provided.placeholder}
                                  </div>
                                )}
                              </Droppable>
                              <Button variant="outline" size="sm" onClick={() => addLesson(section.id)} className="mt-2">
                                <Plus className="h-4 w-4 mr-2" />
                                レッスンを追加
                              </Button>
                            </CardContent>
                          </Card>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <Button onClick={addSection} className="mt-4">
              <Plus className="h-4 w-4 mr-2" />
              セクションを追加
            </Button>
          </TabsContent>
          <TabsContent value="preview">
            <Card>
              <CardHeader>
                <CardTitle>カリキュラムプレビュー</CardTitle>
                <CardDescription>
                  受講者に表示されるカリキュラムのプレビューです。
                </CardDescription>
              </CardHeader>
              <CardContent>
                {sections.map((section) => (
                  <div key={section.id} className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.lessons.map((lesson) => (
                        <li key={lesson.id} className="flex items-center">
                          {lesson.type === 'video' && <span className="mr-2">🎥</span>}
                          {lesson.type === 'text' && <span className="mr-2">📝</span>}
                          {lesson.type === 'audio' && <span className="mr-2">🎧</span>}
                          <span>{lesson.title}</span>
                          {lesson.duration && <span className="ml-2 text-sm text-gray-500">{lesson.duration}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}

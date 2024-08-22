import { tasksReducer } from "./tasks-reducer";
import { TasksReducerUnitTestCase, testCases } from "./fixtures/tasks-reducer.fx"
import { Task } from "../types";

describe('tasksReducer', () => {
    it.each(testCases)(
        `$description`,
        ({
            draft,
            finalDraft,
            action,
            didThrow,
        }: TasksReducerUnitTestCase) => {
            try {
                const draftAfter: Task[] | undefined = tasksReducer(draft, action);
                expect(draftAfter).toEqual(finalDraft)
            } catch (error) {
                if (didThrow) {
                    expect(error).toBeDefined()
                }
            }
        }
    )
})
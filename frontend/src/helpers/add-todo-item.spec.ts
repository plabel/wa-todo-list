import { addTodoItem } from "./add-todo-item";
import { AddTodoItemUnitTestCase, testCases } from "./fixtures/add-todo-item.fx"

describe('addTodoItem', () => {
    it.each(testCases)(
        `$description`,
        ({ dispatch, didRun, didThrow }: AddTodoItemUnitTestCase) => {
            const mock: jest.Mock = jest.fn(dispatch);
            try {
                addTodoItem(mock);
            } catch (error) {
                if (didThrow) {
                    expect(error).toBeDefined()
                }
            } finally {
                if (didRun) {
                    expect(mock).toHaveBeenCalled()
                }
            }
        }
    )
})
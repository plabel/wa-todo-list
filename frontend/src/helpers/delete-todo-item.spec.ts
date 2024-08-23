import { deleteTodoItem } from "./delete-todo-item";
import { DeleteTodoItemUnitTestCase, testCases } from "./fixtures/delete-todo-item.fx"

describe('deleteTodoItem', () => {
    it.each(testCases)(
        `$description`,
        ({ dispatch, index, didRun, didThrow }: DeleteTodoItemUnitTestCase) => {
            const mock: jest.Mock = jest.fn(dispatch);
            try {
                deleteTodoItem(mock, index);
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
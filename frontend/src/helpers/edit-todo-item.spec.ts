import { editTodoItem } from "./edit-todo-item";
import { EditTodoItemUnitTestCase, testCases } from "./fixtures/edit-todo-item.fx"

describe('editTodoItem', () => {
    it.each(testCases)(
        `$description`,
        ({ dispatch, index, didRun, didThrow, title, descriptionArg }: EditTodoItemUnitTestCase) => {
            const mock: jest.Mock = jest.fn(dispatch);
            try {
                editTodoItem(mock, index, title, descriptionArg);
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
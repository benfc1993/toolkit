import { act, renderHook } from "@testing-library/react";
import { useStorage } from "../../hooks/useStorage";

const testKey = "test-item";
const initialData = "test-data";

describe("useStorage", () => {
  afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it("should set the initial state to localStorage", () => {
    renderHook(() => useStorage(initialData, testKey));

    expect(JSON.parse(localStorage.getItem(testKey) ?? "")).toEqual(
      initialData
    );
  });

  it("should set the passed data to local storage", async () => {
    const { result } = renderHook(() => useStorage(initialData, testKey));

    const [, setValue] = result.current;

    await act(() => {
      setValue("new data");
    });

    expect(JSON.parse(localStorage.getItem(testKey) ?? "")).toEqual("new data");
  });

  it("should set the passed data to value", async () => {
    const { result } = renderHook(() => useStorage(initialData, testKey));

    await act(() => {
      result.current[1]("new data");
    });

    expect(result.current[0]).toEqual("new data");
  });

  it("should set the data to the last stored data on reload", () => {
    const { result, rerender, unmount } = renderHook(() =>
      useStorage(initialData, testKey)
    );

    act(() => {
      localStorage.setItem(testKey, JSON.stringify("blah"));
      unmount();
      rerender();
    });

    const [value] = result.current;

    expect(value).toBe("blah");
  });

  it("should store the data in sessions storage if the storage argument is provided", () => {
    const { result } = renderHook(() =>
      useStorage(initialData, testKey, "session")
    );

    act(() => {
      result.current[1]("New Value");
    });

    expect(JSON.parse(sessionStorage.getItem(testKey) ?? "")).toEqual(
      "New Value"
    );
  });

  it("should clear the value from storage if removeValue is called", () => {
    const { result } = renderHook(() =>
      useStorage(initialData, testKey, "session")
    );

    const [, , removeValue] = result.current;

    act(() => {
      removeValue();
    });

    expect(sessionStorage.getItem(testKey)).toEqual(null);
  });

  it("should set the value to undefined if removeValue is called", () => {
    const { result } = renderHook(() =>
      useStorage(initialData, testKey, "session")
    );

    const [, , removeValue] = result.current;

    act(() => {
      removeValue();
    });

    const [value] = result.current;

    expect(value).toEqual(undefined);
  });
});

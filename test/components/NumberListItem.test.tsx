import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import NumberListItem, { NumberListItemProps } from "../../src/components/NumberListItem"
import React from "react"
import { useQuery, UseQueryResult } from "@tanstack/react-query"

const renderComponent = (props: Partial<NumberListItemProps> = {}) => {
    const defaultProps: NumberListItemProps = {
        number: 10
    }

    return render(<NumberListItem {...defaultProps} {...props}/>);
}

describe("NumberListItem", () => {
    it("renders", () => {
        vi.mock("@tanstack/react-query");

        vi.mocked(useQuery).mockReturnValue({
            data: "10 is a cool number",
            error: false,
            fetchStatus: "idle"
        } as unknown as UseQueryResult<unknown, unknown>);

        renderComponent();

        expect(() => screen.getByText("10 is a cool number")).not.toThrowError()
    });

    it("shows an error", () => {
        vi.mock("@tanstack/react-query");

        vi.mocked(useQuery).mockReturnValue({
            data: "10 is a cool number",
            error: true,
            fetchStatus: "idle"
        } as unknown as UseQueryResult<unknown, unknown>);

        renderComponent();

        expect(() => screen.getByText("error")).not.toThrowError();
    });

    it("shows a skeleton", () => {
        vi.mock("@tanstack/react-query");

        vi.mocked(useQuery).mockReturnValue({
            data: "10 is a cool number",
            error: false,
            fetchStatus: "fetching"
        } as unknown as UseQueryResult<unknown, unknown>);

        renderComponent();

        expect(() => screen.getByText("error")).not.toThrowError();
    });
})
// import { configure } from "enzyme"
// import * as Adapter from "@cfaester/enzyme-adapter-react-18"

// configure({ adapter: new Adapter.default })
import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'

afterEach(() => {
  cleanup()
})
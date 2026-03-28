import { configure } from "enzyme"
import * as Adapter from "@cfaester/enzyme-adapter-react-18"

configure({ adapter: new Adapter.default })
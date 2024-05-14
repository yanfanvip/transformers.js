import { env, pipeline } from './src/transformers.js'

env.localModelPath = 'E:\\ai\\models\\onnx\\'
env.allowLocalModels = true

const classifier = await pipeline('zero-shot-classification', 'Xenova@bart-large-mnli')
const text = "What does this article say?"

const labels = ["human eval", "logical reasoning", "summary", "advisory", "math"]
const output = await classifier(text, labels, { multi_label: true })

console.log(output)
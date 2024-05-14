import * as ONNX_NODE from 'onnxruntime-node';
export let ONNX = ONNX_NODE.default ?? ONNX_NODE;

export const executionProviders = [
    'dml',
    'cpu'
]

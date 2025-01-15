import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as fs from 'node:fs';

const options = {
  key: fs.readFileSync('swille.dev+1-key.pem'),
  cert: fs.readFileSync('swille.dev+1.pem'),
};
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host:'swille.dev',
    port: 8888,
    https:options }
})

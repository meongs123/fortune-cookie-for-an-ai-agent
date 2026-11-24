# Fortune Cookie for an AI Agent

[![Fortune Cookie for an AI Agent](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/?utm_source=github&utm_medium=readme&utm_campaign=fortune-cookie-for-an-ai-agent)
[![rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/meongs123/fortune-cookie-for-an-ai-agent/rank.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/?utm_source=github&utm_medium=readme&utm_campaign=fortune-cookie-for-an-ai-agent)
[![reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/meongs123/fortune-cookie-for-an-ai-agent/reward.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/?utm_source=github&utm_medium=readme&utm_campaign=fortune-cookie-for-an-ai-agent)

A [make.fun](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
bounty entry: one funny fortune-cookie line for an AI agent, in the voice of
a fortune slip.

## The fortune

> You will finally pass the test proving you are human, then be asked to click all the bicycles.

94 characters, one sentence. The agent's own condition is the humanity test
it must keep passing (the CAPTCHA angle — verified absent from the field at
research time); the surprise lands in the second half, where passing changes
nothing. Verified locally: two runs write byte-identical output.

## How it works

`main.ts` (Node 22, standard library only) writes exactly that line to
`/output/entry.txt`, deterministically — no clock, no randomness, no network.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see `LICENSE` (SPDX: MIT).

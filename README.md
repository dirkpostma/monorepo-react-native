# Monorepo React Native 0.72

An example monorepo with shared components using react-native and react-native-web with live reload.

## Install

- `yarn`
- `yarn workspace mobile pods`

## Development

To develop components in shared packages, with simultaneaous live reload in both mobile and web, run four background processes:

1. `yarn workspace shared watch`: transpiles shared to shared/dist
2. `node syncSharedToMobile.js`: syncs shared/dist to mobile/node_modules/shared/dist
3. `yarn workspace mobile start`
4. `yarn workspace web start`

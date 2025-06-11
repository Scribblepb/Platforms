#!/usr/bin/env node
import { Command } from 'commander'

const program = new Command()

program
  .command('create component <name>')
  .description('create a new component')
  .action((name: string) => {
    console.log('create component', name)
  })

program
  .command('create flag <flagName>')
  .description('create a new feature flag')
  .action((flagName: string) => {
    console.log('create flag', flagName)
  })

program.parse(process.argv)

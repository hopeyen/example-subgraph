import {
  DataSourceContext,
  Address,
  dataSource,
  BigDecimal,
  BigInt,
  log,
} from "@graphprotocol/graph-ts";
import { ethereum } from "@graphprotocol/graph-ts/chain/ethereum";

export function handleBlock(block: ethereum.Block): void {
  
  log.info('block to fail {}', [block.number.toString()])
  if (block.number.toU64() > 10000000) {
    log.critical('This subgraph is supposed to fail {}', [block.number.toString()])
  }
}

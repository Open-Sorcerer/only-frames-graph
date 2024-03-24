import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  ProductCreated
} from "../generated/OnlyFrames/OnlyFrames"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProductCreatedEvent(
  creator: Address,
  product: Address
): ProductCreated {
  let productCreatedEvent = changetype<ProductCreated>(newMockEvent())

  productCreatedEvent.parameters = new Array()

  productCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("product", ethereum.Value.fromAddress(product))
  )

  return productCreatedEvent
}

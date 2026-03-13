## ADDED Requirements

### Requirement: Typed localStorage abstraction module
The app SHALL provide a single `storage` utility module that wraps all localStorage operations, so that no other module reads or writes localStorage directly.

#### Scenario: Write and read a value
- **WHEN** a module calls `storage.set(key, value)`
- **THEN** the value is serialized to JSON and stored under the given key

#### Scenario: Read a missing key
- **WHEN** a module calls `storage.get(key)` for a key that does not exist
- **THEN** `null` is returned without throwing

#### Scenario: Delete a value
- **WHEN** a module calls `storage.remove(key)`
- **THEN** the key is removed from localStorage

### Requirement: Storage is resilient to parse errors
The storage module SHALL catch JSON parse errors and return `null` rather than throwing, so that corrupted or unexpected values do not crash the app.

#### Scenario: Corrupted value in storage
- **WHEN** localStorage contains a non-JSON string at a key and `storage.get(key)` is called
- **THEN** `null` is returned and no error is thrown to the caller

### Requirement: All storage keys are namespaced
The storage module SHALL prefix all keys with a consistent namespace (e.g., `mhci:`) to avoid collisions with other scripts.

#### Scenario: Key written with namespace
- **WHEN** `storage.set('streak', data)` is called
- **THEN** the actual localStorage key is `mhci:streak`

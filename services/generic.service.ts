import { GenericEntity } from "../entities";

export abstract class GenericService<T extends GenericEntity> {
    protected abstract create(entity: T): Promise<T>;
    protected abstract update(entity: T): Promise<T>;
    protected abstract delete(entity: T): Promise<void>;
    protected abstract archive(entity: T): Promise<void>;
    protected abstract unarchive(entity: T): Promise<T>;
}
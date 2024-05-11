
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/Application' | 'REMOTE_ALIAS_IDENTIFIER/Health';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/Health' ? typeof import('REMOTE_ALIAS_IDENTIFIER/Health') :T extends 'REMOTE_ALIAS_IDENTIFIER/Application' ? typeof import('REMOTE_ALIAS_IDENTIFIER/Application') :any;
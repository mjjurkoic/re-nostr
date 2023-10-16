/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ReNostrNoteEditor {
        /**
          * Any content that should populate the note editor before the user starts typing.
         */
        "initialContent"?: string;
        /**
          * Placeholder text to show before the user starts typing.
         */
        "placeholder"?: string;
    }
    interface ReNostrPopoverNote {
        "quotedContent"?: string;
    }
    interface ReNostrPopoverRoot {
    }
}
export interface ReNostrNoteEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLReNostrNoteEditorElement;
}
declare global {
    interface HTMLReNostrNoteEditorElement extends Components.ReNostrNoteEditor, HTMLStencilElement {
    }
    var HTMLReNostrNoteEditorElement: {
        prototype: HTMLReNostrNoteEditorElement;
        new (): HTMLReNostrNoteEditorElement;
    };
    interface HTMLReNostrPopoverNoteElement extends Components.ReNostrPopoverNote, HTMLStencilElement {
    }
    var HTMLReNostrPopoverNoteElement: {
        prototype: HTMLReNostrPopoverNoteElement;
        new (): HTMLReNostrPopoverNoteElement;
    };
    interface HTMLReNostrPopoverRootElement extends Components.ReNostrPopoverRoot, HTMLStencilElement {
    }
    var HTMLReNostrPopoverRootElement: {
        prototype: HTMLReNostrPopoverRootElement;
        new (): HTMLReNostrPopoverRootElement;
    };
    interface HTMLElementTagNameMap {
        "re-nostr-note-editor": HTMLReNostrNoteEditorElement;
        "re-nostr-popover-note": HTMLReNostrPopoverNoteElement;
        "re-nostr-popover-root": HTMLReNostrPopoverRootElement;
    }
}
declare namespace LocalJSX {
    interface ReNostrNoteEditor {
        /**
          * Any content that should populate the note editor before the user starts typing.
         */
        "initialContent"?: string;
        /**
          * Emits the content of the note when it is updated.
         */
        "onUpdateNote"?: (event: ReNostrNoteEditorCustomEvent<string>) => void;
        /**
          * Placeholder text to show before the user starts typing.
         */
        "placeholder"?: string;
    }
    interface ReNostrPopoverNote {
        "quotedContent"?: string;
    }
    interface ReNostrPopoverRoot {
    }
    interface IntrinsicElements {
        "re-nostr-note-editor": ReNostrNoteEditor;
        "re-nostr-popover-note": ReNostrPopoverNote;
        "re-nostr-popover-root": ReNostrPopoverRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "re-nostr-note-editor": LocalJSX.ReNostrNoteEditor & JSXBase.HTMLAttributes<HTMLReNostrNoteEditorElement>;
            "re-nostr-popover-note": LocalJSX.ReNostrPopoverNote & JSXBase.HTMLAttributes<HTMLReNostrPopoverNoteElement>;
            "re-nostr-popover-root": LocalJSX.ReNostrPopoverRoot & JSXBase.HTMLAttributes<HTMLReNostrPopoverRootElement>;
        }
    }
}

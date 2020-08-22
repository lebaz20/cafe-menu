CREATE TABLE public.menu (
    "menuId" integer NOT NULL,
    name text NOT NULL,
    type text NOT NULL,
    price money NOT NULL,
    photo text NOT NULL
);
CREATE SEQUENCE public.menu_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.menu_id_seq OWNED BY public.menu."menuId";
ALTER TABLE ONLY public.menu ALTER COLUMN "menuId" SET DEFAULT nextval('public.menu_id_seq'::regclass);
ALTER TABLE ONLY public.menu
    ADD CONSTRAINT menu_pkey PRIMARY KEY ("menuId");

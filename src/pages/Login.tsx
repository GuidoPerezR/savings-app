export function LoginPage() {
  return (
    <main className="flex min-h-dvh w-full items-center justify-center bg-dark px-5 py-10 font-jakarta-sans text-light">
      <section>
        <div className="flex w-full max-w-md flex-col gap-6 rounded-lg bg-secondary p-10 shadow-lg">
          <h1 className="text-center text-2xl font-bold">Iniciar sesion</h1>

          <form action="" className="flex flex-col gap-4">
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            <footer className="mx-auto mt-4">
              <button
                type="submit"
                className="rounded-3xl bg-primary px-12 py-3"
              >
                Ingresar
              </button>
            </footer>
          </form>
        </div>
      </section>
    </main>
  );
}

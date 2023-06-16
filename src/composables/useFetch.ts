import { ref, Ref } from 'vue'

interface FetchResult<T> {
  data: Ref<T | null>
  error: Ref<Error | null>
}

export async function useFetch<T>(url: string): Promise<FetchResult<T>> {
  const data: Ref<T | null> = ref(null)
  const error: Ref<Error | null> = ref(null)

  try {
    const response = await fetch(url)
    const json = await response.json()
    data.value = json
  } catch (err) {
    error.value = err as Error
  }

  return { data, error }
}
